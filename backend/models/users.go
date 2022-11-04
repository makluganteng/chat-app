package models

type User struct {
	userId   string `gorm:"primarykey" json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}
