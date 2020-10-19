
# abbreviations: 
# sp: service provider

import json


def normalize_sp(service_provider):
  normalized_sp = {
    "id": int(service_provider["PutRequest"]["Item"]["id"]["S"]),
    "Label": service_provider["PutRequest"]["Item"]["Label"]["S"],
    "Type": service_provider["PutRequest"]["Item"]["Type"]["S"],
    "Program and Services": service_provider["PutRequest"]["Item"]["Program and Services"]["S"],
    "Description": service_provider["PutRequest"]["Item"]["Description"]["S"],
    "Tags": list(service_provider["PutRequest"]["Item"]["Tags"]["SS"]),
    "Address": service_provider["PutRequest"]["Item"]["Address"]["S"],
    "Phone": service_provider["PutRequest"]["Item"]["Phone"]["S"],
    "Fax": service_provider["PutRequest"]["Item"]["Fax"]["S"],
    "Email": service_provider["PutRequest"]["Item"]["Email"]["S"],
    "Website": service_provider["PutRequest"]["Item"]["Website"]["S"],
    "Attributions": service_provider["PutRequest"]["Item"]["Attributions"]["S"]
  }

  # print("processed: ", normalized_sp)

  return normalized_sp

def read_aws_json(filepath):
  raw_json = {}
  json_str = {}
  with open(filepath) as f:
    raw_json = json.load(f)
    json_str = json.dumps(raw_json, indent = 4, sort_keys=True)
  
  # print(raw_json["ServiceProvider-yoruyjsfane6zfwi54uakwddje-dev"])
  # print(raw_json["ServiceProvider-yoruyjsfane6zfwi54uakwddje-dev"][0])
  return raw_json, json_str

def store_json(to_store, filepath):
  with open(filepath, 'w') as json_file:
    json_file.write(json.dumps(to_store, indent=4, sort_keys=True))

def normalize_list_sp(raw_sp):
  normalized_service_providers = []
  for put_request in raw_sp["ServiceProvider-yoruyjsfane6zfwi54uakwddje-dev"]:
    normalized_service_providers.append(normalize_sp(put_request))
  # print(len(normalized_service_providers))
  return {"service_providers": normalized_service_providers}

### MAIN ###
all_sp_raw, all_sp_json_str = read_aws_json('shFULL.json')
sp_json = normalize_list_sp(all_sp_raw)
print(json.dumps(sp_json["service_providers"], indent=4, sort_keys=True))
store_json(sp_json, 'shFULLNormalized.json')
