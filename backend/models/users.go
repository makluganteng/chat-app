package models

type User struct {
	id       string `gorm:"primarykey" json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}
