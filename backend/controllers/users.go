package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type AuthBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func GetAuthenticate(c *gin.Context) {
	var input AuthBody
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	data := AuthBody{Username: input.Username, Password: input.Password}
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
}

func Register(c *gin.Context) {

}
