# Simple Makefile for a Go project

# Build the application
all: build test
build:
	@echo "Building..."
	@tailwindcss -i cmd/web/styles/input.css -o cmd/web/assets/css/output.css
	@templ generate
	@go build -o main cmd/api/main.go

# Run the application
run:
	@echo "Running..."
	@tailwindcss -i cmd/web/styles/input.css -o cmd/web/assets/css/output.css
	@templ generate
	@go run cmd/api/main.go

# Test the application
test:
	echo "Testing..."
	go test ./... -v

# Clean the binary
clean:
	echo "Cleaning..."
	rm -f main
