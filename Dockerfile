	FROM node AS source
	RUN mkdir -p /node/shop-app
	ADD src/ /node/shop-app
	WORKDIR /node/shop-app
	RUN npm install -y

	FROM node:alpine
	ARG APP_VERSION=V1.1
	LABEL org.label-schema.version=$APP_VERSION
	ENV NODE_ENV="test"
	COPY --from=source /node/shop-app /node/shop-app
	WORKDIR /node/shop-app
	EXPOSE 3000

	ENTRYPOINT ["./bin/www"]
