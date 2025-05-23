"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEntitySingleLink = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * See https://api.sap.com/api/path for more information.
 */
class TestEntitySingleLink extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.TestEntitySingleLink = TestEntitySingleLink;
/**
 * Technical entity name for TestEntitySingleLink.
 */
TestEntitySingleLink._entityName = 'A_TestEntitySingleLink';
/**
 * Default url path for the according service.
 */
TestEntitySingleLink._defaultBasePath = '/sap/opu/odata/sap/API_TEST_SRV';
/**
 * All key fields of the TestEntitySingleLink entity.
 */
TestEntitySingleLink._keys = ['KeyProperty'];
//# sourceMappingURL=TestEntitySingleLink.js.map