require 'pry'

class GoalsController < ApplicationController
    def index 
        goals = Goal.all 
        render json: goals
    end

    def show 
        goal = Goal.find(params[:id])
        render json: goal
    end

    def create 
        goal = Goal.find_or_create_by(goal_params)
        if goal.save
            render json: goal, except: [:created_at, :updated_at]
        else
            render json:  { message: 'Goal Creation Failure' }
        end
        # binding.pry
    end

    def destroy
        goals = Goal.all
        goal = Goal.find_by(id: params[:id])
        if goal 
            id = goal.id
            goal.destroy
            render json: goals
        else 
            render json: { message: 'Goal not found' }
        end
    end

    def update 
        goal = Goal.find_by(id: params[:id])
        if goal 
            goal.update(goal_params)
            goal.save
            render json: goal
        else 
            render json: {message: 'There has been a mistake'}
        end
        # binding.pry
    end

    private

    def goal_params
        params.require(:goal).permit(:name, :price, :paid, :completed, :user_id)
    end

end
