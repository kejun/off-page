default: 
	npm install
	component install
	grunt
	component build 

build: components index.js offpage.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build test/*.css components node_modules

.PHONY: clean
