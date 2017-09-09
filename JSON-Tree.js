// 树形结构递归，层级分析

var items = [{
	"id": 185,
	"name": "大区",
	"parentId": null,
	"children": [{
		"id": 186,
		"name": "河南省",
		"parentId": 185,
		"children": [{
			"id": 192,
			"name": "洛阳市",
			"parentId": 186,
			"children": []
		}, {
			"id": 187,
			"name": "平顶山市",
			"parentId": 186,
			"children": [{
				"id": 191,
				"name": "郏县",
				"parentId": 187,
				"children": []
			}, {
				"id": 190,
				"name": "宝丰县",
				"parentId": 187,
				"children": []
			}, {
				"id": 188,
				"name": "鲁山县",
				"parentId": 187,
				"children": [{
					"id": 189,
					"name": "马楼乡",
					"parentId": 188,
					"children": []
				}]
			}]
		}]
	}]
}];


function initTreeList(newList, items) {
	for (var i = 0, j = items.length; i < j; i++) {
		var item = items[i];
		newList.push(item);
		if (item.children) newList = initTreeList(newList, item.children);
	}
	return newList;
}

function initTreeMap(newMap, list) {
	for (var i = 0, j = list.length; i < j; i++) {
		newMap[list[i].id] = list[i];
	}
	return newMap;
}

function getItemLevel(id, map) {
	var n = -1;
	while (id) {
		n++;
		if (map[id]) id = map[id].parentId;
	}
	return n;
}

function setListLevel(list, map) {
	for (var i = 0, j = list.length; i < j; i++) {
		list[i].level = getItemLevel(list[i].id, map);
	}
}


var list = initTreeList(new Array(), items);
var map = initTreeMap(new Object(), list);
setListLevel(list, map);

