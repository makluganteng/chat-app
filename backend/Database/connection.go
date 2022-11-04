package database

import (
	"example/getEnv"
	"example/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	url := getEnv.GoDotEnvVariable("DB_URL")
	db, err := gorm.Open(mysql.Open(url), &gorm.Config{})

	if err != nil {
		panic("could not connect to database")
	}

	DB = db

	// setup tables in database
	if err := db.AutoMigrate(&models.User{}); err != nil {
		panic(err)
	}
}
