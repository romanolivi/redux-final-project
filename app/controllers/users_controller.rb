class UsersController < ApplicationController
    def index 
        users = User.all
        options = {
            include: [:goals]
        }
        render json: UserSerializer.new(users, options)
    end

    def show 
        user = User.find_by(id: params[:id])
        options = {
            include: [:goals]
        }
        render json: UserSerializer.new(users, options)
    end

    def create
        user = User.new(user_params)
        if user.save 
            render json: user, except: [:created_at, updated_at]
        else 
            render json: { message: 'User Creation Failure'}
        end
    end

    def update 
        user = User.find(params[:id])
        if user 
            goal = Goal.find_or_create_by(:goal => params[:_json], :user_id => params[:id])
        end
        render json: goal
    end

    def destroy 
        user = User.find(params[:id])
        if user 
            Goal.delete(user.goals.find{|img| img.image == params[:_json] }.id)
        end
        render json: goal
    end

    private 

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
