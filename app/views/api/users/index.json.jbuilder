
json.array! @users do |u|
  json.merge! u.attributes
  json.projects u.projects.pluck('name')
end
