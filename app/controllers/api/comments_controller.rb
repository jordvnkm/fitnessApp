class Api::CommentsController < ApplicationController

  def create
    @comment = Api::Comment.new(comment_params)

    if @comment.save
      render '/api/comments/show'
    else
      @errors = @comment.errors.full_messages
      render '/api/shared/error', status: 401
    end
  end

  def show
    @route = Api::Route.find(params[:id])

    if @route
      @comments = @route.comments
      render '/api/comments/index'
    else
      @errors = ['could not find comments for route id']
      render '/api/shared/error', status: 404
    end
  end

  def destroy
    @comment = Api::Comment.find(params[:id])

    if @comment
      @comment.destroy
      render '/api/comments/show'
    else
      @errors = ['no comment to destroy']
      render '/api/shared/error', status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :content, :route_id)
  end

end
