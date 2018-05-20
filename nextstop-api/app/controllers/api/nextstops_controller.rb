class Api::NextstopsController < ApplicationController
    before_action :set_nextstop, only: [:show, :update, :destroy]
    # test out git 
    
    def index 
        render json: Nextstop.all
    end 
    
    def create 
        nextstop = Nextstop.new(nextstop_params)
        if nextstop.save
            render json: nextstop
        else 
            render json: {message: nextstop.errors}, status: 400
        end 
    end 
    
    def show 
        render json: @nextstop
    end 
    
    def update 
        if @nextstop.update(nextstop_params)
            render json: @nextstop
        else
            render json: {message: @nextstop.errors}, status: 400
        end
    end 
    
    def destroy
        if @nextstop.destroy
            render status: 204
        else 
            render json: {message: "Unable to remove nextstop"}, status: 400
        end 
    end 

    private
    
        def set_nextstop
            @nextstop = Nextstop.find_by(id: params[:id])
        end 
    
        def nextstop_params
            params.require(:nextstop).permit(:name, :budget, :img_url, :like, :dislike)
        end 
    
    
end 