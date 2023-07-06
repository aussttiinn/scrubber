from handlers.eventHandler import EventHandler
from handlers.fbHandler import FbHandler

def execute(event, context):
    print(event)
    return None

if __name__ == "__main__":
    testEvent = "{\"access_token\":\"123\"}"

    execute(testEvent)
