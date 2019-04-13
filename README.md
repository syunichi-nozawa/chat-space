# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

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

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|name|string|null: false|
|mail|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups
- belongs_to :member

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|foreign_key: true|

### Association
- has_many :messages
- has_many :members, through: :messages
