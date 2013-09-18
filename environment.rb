ENV['BUNDLE_GEMFILE'] ||= File.expand_path('Gemfile', __FILE__)

require 'bundler/setup' if File.exists?(ENV['BUNDLE_GEMFILE'])

require 'sinatra'
require 'haml'

set :public_folder, File.dirname(__FILE__) + "/public"
