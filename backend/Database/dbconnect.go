package Database

import (
	"database/sql"
	"example/getEnv"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func CreateCon() {
	dbUserName := getEnv.GoDotEnvVariable("DB_USERNAME")
	dbPassword := getEnv.GoDotEnvVariable("DB_PASSWORD")
	dbLocal := getEnv.GoDotEnvVariable("DB_LOCALHOST")
	dbName := getEnv.GoDotEnvVariable("DB_NAME")
	connectionString := dbUserName + dbPassword + dbLocal + "/" + dbName
	db, err := sql.Open("mysql", connectionString)

	if err != nil {
		panic(err.Error())
	}
	fmt.Println("Success")
	DB = db
}
