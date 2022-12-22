class Api::PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :update, :destroy]

  def index
    render json: Patient.all
  end

  def show
    render json: @patient
  end

  def create
    @patient = Patient.new(patient_params)
    if @patient.save
      render json: @patient
    else
      render json: { errors: @patient.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @patient.update(patient_params)
      render json: @patient
    else
      render json: { errors: @patient.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @patient.destroy
    render json: { message: 'Patient Deleted' }
  end

  # Custom route to get all doctors the patient is seeing

  private
    def set_patient
      @patient = Patient.find(params[:id])
    end

    def patient_params
      params.require(:patient).permit(:first_name, :last_name, :email, :phone, :dob)
    end
end