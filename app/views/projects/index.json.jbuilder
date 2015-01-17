
json.array! @projects do |p|
  json.merge! p.attributes
  json.merge! p.author.attributes
end
