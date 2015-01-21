json.merge! @user.attributes
json.projects @user.projects do |p|
  json.merge! p.attributes
end
