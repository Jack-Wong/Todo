class Api::StepsController < ApplicationController

  def index
    steps = ToDo.find(params[:todo_id]).steps
    render json: steps
  end

  def create
    @step = Step.new(steps_params)
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages
    end
  end

  def update
    @step = Step.find(params[:id])
    @step.update(steps_params)
    render json: @step
  end

  def destroy
    @step = Step.find(params[:id]).destroy
    render json: @step
  end

  private
  def steps_params
    params.require(:step).permit(:title, :body, :done, :to_do_id)
  end

end
