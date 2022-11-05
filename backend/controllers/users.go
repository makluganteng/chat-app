package controllers

import (
	"example/database"
	"example/models"
	"net/http"

	"github.com/gin-gonic/gin"
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
	var user models.User
	if err := database.DB.Where("username = ?", input.Username).First(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{
			"response": "success",
		})
		return
	}

}

func Register(c *gin.Context) {
	var input AuthBody
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	data := models.User{
		Username: input.Username,
		Password: input.Password,
	}
	if result := database.DB.Create(&data).Error; result != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": result.Error()})
		return
	}
	c.JSON(http.StatusOK, data)
	return
}
