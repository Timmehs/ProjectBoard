require 'active_resource'

class Commit < ActiveResource::Base
  self.site = "https://api.github.com/users/"

  def collection_path(options = nil)
    "/#{prefix_options[:user]}"
  end


end
