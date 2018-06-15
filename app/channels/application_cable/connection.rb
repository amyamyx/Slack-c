module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def Connect
      self.current = find_verified_user
    end

    protected
    def find_verified_user
      if current_user = User.find(cookies.signed[:user_id])
        current_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
