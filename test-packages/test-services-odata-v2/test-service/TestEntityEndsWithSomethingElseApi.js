"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEntityEndsWithSomethingElseApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TestEntityEndsWithSomethingElse_1 = require("./TestEntityEndsWithSomethingElse");
const TestEntityEndsWithSomethingElseRequestBuilder_1 = require("./TestEntityEndsWithSomethingElseRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TestEntityEndsWithSomethingElseApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new TestEntityEndsWithSomethingElseApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new TestEntityEndsWithSomethingElseRequestBuilder_1.TestEntityEndsWithSomethingElseRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link keyProperty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                KEY_PROPERTY: fieldBuilder.buildEdmTypeField('KeyProperty', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TestEntityEndsWithSomethingElse_1.TestEntityEndsWithSomethingElse)
            };
        }
        return this._schema;
    }
}
exports.TestEntityEndsWithSomethingElseApi = TestEntityEndsWithSomethingElseApi;
//# sourceMappingURL=TestEntityEndsWithSomethingElseApi.js.map