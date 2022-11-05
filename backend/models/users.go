package models

type User struct {
	userId   string `gorm:"primarykey" json:"id"`
	Username string `gorm:"size:191" json:"username"`
	Password string `gorm:"size:191" json:"username"`
}
