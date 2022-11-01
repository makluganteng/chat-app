package register

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Register struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func RegisterUser(c *gin.Context) {
	var input userInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	data := Register{Username: userInput.Username, Password: userInput.Password}
}