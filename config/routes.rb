Rails.application.routes.draw do
 
namespace :api do
  resources: doctors
  resources :patients
  resources: doctors do
  resources :appointments
  get '/:doctorId/noAppointment', to: 'appointments#noAppointmentUsers'
      get '/:doctorId/yesAppointment', to: 'appointments#yesAppointmentUsers'
    end 
    get '/:id/doctors', to: 'patients#doctors'
    get '/:id/patients', to: 'doctors#patients'
  end 
end

