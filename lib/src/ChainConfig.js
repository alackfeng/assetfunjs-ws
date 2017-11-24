let _this;

let _g_COIN_PREFIX = "AFT";

let ecc_config = {
    address_prefix: process.env.npm_config__graphene_ecc_default_address_prefix || _g_COIN_PREFIX
};

_this = {
    core_asset: _g_COIN_PREFIX,
    address_prefix: _g_COIN_PREFIX,
    expire_in_secs: 15,
    expire_in_secs_proposal: 24 * 60 * 60,
    review_in_secs_committee: 24 * 60 * 60,
    networks: {
        Assetfun: {
            core_asset: _g_COIN_PREFIX,
            address_prefix: _g_COIN_PREFIX,
            chain_id: "6bfead230c81d1d12535185b790c54c1cd690797a5ff2c134cad446046ce5421"
        },
        fidchain: {
            core_asset: "FID",
            address_prefix: "FID",
            chain_id: "e76e595f05ff816f22f3625629a914c84ec0cf12d4b68aae280dbe5339fa65a4"
        }
    },

    /** Set a few properties for known chain IDs. */
    setChainId: function(chain_id) {

        let i, len, network, network_name, ref;
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
                }
            }
        }

        if (!_this.network_name) {
            console.log("Unknown chain id (this may be a testnet)", chain_id);
        }

    },

    reset: function() {
        _this.core_asset = _g_COIN_PREFIX;
        _this.address_prefix = _g_COIN_PREFIX;
        ecc_config.address_prefix = _g_COIN_PREFIX;
        _this.expire_in_secs = 15;
        _this.expire_in_secs_proposal = 24 * 60 * 60;

        console.log("Chain config reset");
    },

    setPrefix: function(prefix = _g_COIN_PREFIX) {
        _this.address_prefix = prefix;
        ecc_config.address_prefix = prefix;
    }
}

export default _this;
