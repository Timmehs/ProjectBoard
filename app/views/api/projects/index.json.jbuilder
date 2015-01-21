
json.array! @projects do |p|
  json.merge! p.attributes
  json.author p.author
  json.tags p.tags.pluck('name')
end
