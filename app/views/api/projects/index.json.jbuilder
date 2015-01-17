
json.array! @projects do |p|
  json.merge! p.attributes
  json.author p.author
end
