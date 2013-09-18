require_relative 'environment'

get '/' do
  haml :index
end