const fs = require("fs");
const path = require("path");
const { sizeFormatter } = require("human-readable");
const formatSize = sizeFormatter({
	std: "JEDEC",
	decimalPlaces: "2",
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`,
});
const moment = require("moment-timezone");
const getPosition = (name, _dir, option) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i][option] === name) {
			position = i;
		}
	});
	if (position !== null) {
		return position;
	}
};

class Database {
	constructor(...args) {
		this.path = "src";
		this.addDatabase = function (name) {
			if (!name) return "Empty name";
			if (fs.existsSync(path.join(this.path, name + ".json"))) return `File '${name}' already available`;
			try {
				fs.writeFileSync(path.join(this.path, name + ".json"), "[]");
				return `Writing file "${name}" success`;
			} catch (err) {
				console.error(err);
				return "Error writing file\n" + err;
			}
		};
		this.rename = function (name, setName) {
			if (!name || !setName) return setName || name + "Empty file " + setName || name;
			if (!fs.existsSync(path.join(this.path, name + ".json")))
				return `'${name}' file not found, please addDatabase first`;
			if (fs.existsSync(path.join(this.path, setName + ".json"))) return `'${setName}' is existed`;
			try {
				fs.renameSync(path.join(this.path, name + ".json"), path.join(this.path, setName + ".json"));
				return `successful rename file "${name}"`;
			} catch (err) {
				console.error(err);
				return "Error when renaming files\n" + err;
			}
		};
		this.modified = function (name, options = "") {
			if (!name) return "empty name";
			if (!options) return "empty options";
			if (!fs.existsSync(path.join(this.path, name + ".json")))
				return `'${name}' file not found, please addDatabe first`;
			try {
				let data = JSON.parse(fs.readFileSync(path.join(this.path, name + ".json")));
				data.push(options);
				fs.writeFileSync(path.join(this.path, name + ".json"), JSON.stringify(data, null, 2));
				return {
					message: `success add result\n"${options}"\nto file "${name}"`,
					result: JSON.parse(fs.readFileSync(path.join(this.path, name + ".json"))),
				};
			} catch (e) {
				console.error(e);
				return "Error add result to file\n" + e;
			}
		};
		this.deleteDatabase = function (name) {
			if (!name) return "empty name";
			if (!fs.existsSync(path.join(this.path, name + ".json")))
				return `'${name}' file not found, please addDatabase first`;
			try {
				fs.rmSync(path.join(this.path, name + ".json"));
				return `successfully delete file "${name}"`;
			} catch (err) {
				return `error delete file\n` + err;
			}
		};
		this.cekDatabase = function (name, variable, data) {
			if (!name) return "empty name";
			if (!variable) return `empty variable, if no variable set to "false"`;
			if (!data) return "empty data";
			if (!fs.existsSync(path.join(this.path, name + ".json")))
				return `'${name}' file not found, please addDatabase first`;
			try {
				const dataFind = JSON.parse(fs.readFileSync(path.join(this.path, name + ".json")));
				return dataFind.find((da) => (variable ? da[variable] == data : da == data)) || false;
			} catch (err) {
				return "failed to retrieve data, " + String(err);
			}
		};
		this.statDatabase = function (name) {
			if (!name) return "empty name";
			if (!fs.existsSync(name)) return `'${name}' file not found, please addDatabase first`;
			try {
				let stat = fs.statSync(name);
				return {
					filename: path.basename(name),
					path: name,
					size: formatSize(stat.size),
					createdTime: moment(stat.ctimeMs).format("DD/MM/YY HH:mm:ss"),
				};
			} catch (err) {
				console.log(err);
				return `failed loading file status`;
			}
		};
	}
}

module.exports = Database;