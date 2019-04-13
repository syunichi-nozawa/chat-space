# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## usersテーブル

|name|string|null: false|
|mail|string|null: false, unique: true|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル

### Association
- has_many :users_groups
- has_many :users, through: :user_groups
