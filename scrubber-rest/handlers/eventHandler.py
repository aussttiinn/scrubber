import json

class EventHandler: 
    def __init__(self, event):
        if not isinstance(event, str): 
            raise TypeError("Event argument is not a string.")
        self.event = json.loads(event)

    def getAccessToken(self):
        return self.event.get("access_token")
