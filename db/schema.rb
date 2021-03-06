# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150204190807) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_memberships", force: true do |t|
    t.integer  "user_id",                    null: false
    t.integer  "board_id",                   null: false
    t.boolean  "admin",      default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "board_memberships", ["board_id", "user_id"], name: "index_board_memberships_on_board_id_and_user_id", unique: true, using: :btree
  add_index "board_memberships", ["board_id"], name: "index_board_memberships_on_board_id", using: :btree
  add_index "board_memberships", ["user_id"], name: "index_board_memberships_on_user_id", using: :btree

  create_table "boards", force: true do |t|
    t.string   "name",       null: false
    t.text     "desc",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "boards", ["name"], name: "index_boards_on_name", unique: true, using: :btree

  create_table "commits", force: true do |t|
    t.string   "sha",          null: false
    t.integer  "user_uid",     null: false
    t.text     "message",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "project_id"
    t.datetime "committed_on"
  end

  add_index "commits", ["sha"], name: "index_commits_on_sha", using: :btree
  add_index "commits", ["user_uid"], name: "index_commits_on_user_uid", using: :btree

  create_table "delayed_jobs", force: true do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority", using: :btree

  create_table "projects", force: true do |t|
    t.string   "name",         null: false
    t.integer  "owner_id",     null: false
    t.string   "html_url",     null: false
    t.string   "homepage",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "uid"
    t.text     "description"
    t.integer  "commit_count"
  end

  add_index "projects", ["name"], name: "index_projects_on_name", using: :btree
  add_index "projects", ["owner_id"], name: "index_projects_on_owner_id", using: :btree

  create_table "taggings", force: true do |t|
    t.integer  "tag_id"
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.integer  "tagger_id"
    t.string   "tagger_type"
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
  add_index "taggings", ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree

  create_table "tags", force: true do |t|
    t.string  "name"
    t.integer "taggings_count", default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uid"
    t.string   "provider"
    t.string   "username"
    t.string   "avatar"
  end

end
