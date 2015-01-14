Rails.application.config.middleware.use OmniAuth::Builder
  provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET'], scope: "user:email,user:follow"
end
