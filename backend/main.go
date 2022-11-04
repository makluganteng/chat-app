package main

import (
	"example/controllers"
	"example/database"

	"github.com/gin-gonic/gin"
)

type Authenticate struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

var router = gin.Default()

func main() {
	database.ConnectDB()
	router.POST("/register", controllers.Register)
	router.POST("/authenticate", controllers.GetAuthenticate)
	router.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
