package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"example/authenticate"
)

type Authenticate struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	r.POST("/authenticate", authenticate.GetAuthenticate)
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
