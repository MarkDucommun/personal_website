$: << File.expand_path(File.dirname(__FILE__))

map '/public' do
  run Rack::Directory.new('./public')
end

require 'controller'
run Sinatra::Application