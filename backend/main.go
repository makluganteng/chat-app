package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
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

	r.POST("/authenticate", func(c *gin.Context) {
		var input Authenticate
		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		data := Authenticate{Username: input.Username, Password: input.Password}
		if data.Username == "" || data.Password == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Parameters can't be empty"})
			return
		}
		if data.Username == "admin" && data.Password == "admin" {
			c.JSON(http.StatusOK, gin.H{
				"response": "success",
			})
			return
		} else {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
			return
		}
	})
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
