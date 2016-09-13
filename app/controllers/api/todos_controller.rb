class Api::TodosController < ApplicationController

  def index
    @todos = ToDo.all
    render json: @todos
  end

  def show
    @todo = ToDo.find(params[:id])
    render json: @todo
  end

  def create
    @todo = ToDo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.erros.full_messages
    end
  end

  def edit
    @todo = ToDo.find(params[:id])
  end

  def update
    @todo = ToDo.find(params[:id])
    @todo.update(todo_params)
    render json: @todo
  end

  def destroy
    @todo = ToDo.find(params[:id]).destroy
    render json: @todo
  end

  private
  def todo_params
    puts params
    params.require(:todo).permit(:title, :body, :done)
  end
end
