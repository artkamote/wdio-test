ifdef DOTENV
	DOTENV_TARGET=dotenv
else
	DOTENV_TARGET=.env
endif

################
# Entry Points #
################

shell: $(DOTENV_TARGET)
	docker-compose run --rm system-test-runner make _shell

##########
# Others #
##########

# Create .env based on .env.template if .env does not exist
.env:
	@echo "Create .env with .env.template"
	cp .env.template .env

# Create/Overwrite .env with $(DOTENV)
dotenv:
	@echo "Overwrite .env with $(DOTENV)"
	cp $(DOTENV) .env

_shell: _registry
	bash

_systemTest:
	npm run system-test

_clean:
	rm -fr node_modules .serverless dist

######################
# System Tests       #
######################

systemtests:$(DOTENV_TARGET)
	docker-compose run --rm system-test-runner

shellSystemTests:
	docker-compose run --rm system-test-runner bash

cleanSystemTests:
	docker-compose down
	rm -fr ./allure-results/*.*
	rm -fr ./results/*.xml
	rm -fr ./results/*.html
	rm -fr ./results/screenshots/*.png
	docker-compose build --force-rm system-test-runner
