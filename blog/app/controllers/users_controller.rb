class UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy]
  before_action :authorize_request, only: [:update]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users
  def update
    puts @current_user.inspect
    if @current_user.update(update_params)
      render json: @current_user
    else
      render json: @current_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :password, :age, :location, :gender, :interests)
    end

    def update_params
      params.require(:data).permit(:age, :location, :gender, :interests, :password)
    end 
end
