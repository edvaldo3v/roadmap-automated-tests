.PHONT: default 

APP_NAME=Roadmap

default: run

run:
	@npm run dev

start:
	@docker-compose up -d

stop:
	@docker-compose down

