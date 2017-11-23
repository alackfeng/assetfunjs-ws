"use strict";

exports.__esModule = true;
var _this = void 0;

var ecc_config = {
    address_prefix: process.env.npm_config__graphene_ecc_default_address_prefix || "AFT"
};

_this = {
    core_asset: "AFT",
    address_prefix: "AFT",
    expire_in_secs: 15,
    expire_in_secs_proposal: 24 * 60 * 60,
    review_in_secs_committee: 24 * 60 * 60,
    networks: {
        Assetfun: {
            core_asset: "AFT",
            address_prefix: "AFT",
            chain_id: "6bfead230c81d1d12535185b790c54c1cd690797a5ff2c134cad446046ce5421"
        }
    },

    /** Set a few properties for known chain IDs. */
    setChainId: function setChainId(chain_id) {

        var i = void 0,
            len = void 0,
            network = void 0,
            network_name = void 0,
            ref = void 0;
        ref = Object.keys(_this.networks);

        for (i = 0, len = ref.length; i < len; i++) {

            network_name = ref[i];
            network = _this.networks[network_name];

            if (network.chain_id === chain_id) {

                _this.network_name = network_name;

                if (network.address_prefix) {
                    _this.address_prefix = network.address_prefix;
                    ecc_config.address_prefix = network.address_prefix;
                }

                // console.log("INFO    Configured for", network_name, ":", network.core_asset, "\n");

                return {
                    network_name: network_name,
                    network: network
                };
            }
        }

        if (!_this.network_name) {
            console.log("Unknown chain id (this may be a testnet)", chain_id);
        }
    },

    reset: function reset() {
        _this.core_asset = "AFT";
        _this.address_prefix = "AFT";
        ecc_config.address_prefix = "AFT";
        _this.expire_in_secs = 15;
        _this.expire_in_secs_proposal = 24 * 60 * 60;

        console.log("Chain config reset");
    },

    setPrefix: function setPrefix() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "AFT";

        _this.address_prefix = prefix;
        ecc_config.address_prefix = prefix;
    }
};

exports.default = _this;
module.exports = exports["default"];