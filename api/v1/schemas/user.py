
def userSchema(user):
    return {
        "name": user['name'],
        "lastName": user['lastName'],
        "username": user['username'],
        "disabled": user['disabled'],
        "createdAt": str(user['created_at']),
        "role": user['role']
    }