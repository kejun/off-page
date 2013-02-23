install: 
	npm install

build: components index.js offpage.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build *.css test/*.css components node_modules

.PHONY: clean
