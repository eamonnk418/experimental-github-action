package main

import (
	"fmt"
	"log"

	"github.com/sethvargo/go-githubactions"
)

func main() {
	action := githubactions.New()

	username := action.GetInput("username")
	if username == "" {
		log.Fatal("username is required")
	}

	message := fmt.Sprintf("Hello, %s!", username)

	action.SetOutput("greeting", message)
}
