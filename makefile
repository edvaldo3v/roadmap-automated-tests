.PHONT: default 

APP_NAME=Roadmap

default: run

run:
	@npm run dev

start:
	@docker-compose up -d

stop:
	@docker-compose down

restart:
	@docker-compose restart

test:
	@npm run test:i

spec:
	@npm run test:u
