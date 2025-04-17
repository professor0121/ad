"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Key } from "lucide-react";

export default function AccessAndAuthorizationPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center gap-2">
        <Shield className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Access & Authorization</h1>
      </div>
      
      <p className="text-muted-foreground">
        Manage user access, roles, and permissions for your organization.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>User Management</CardTitle>
            </div>
            <CardDescription>
              Add, remove, or modify user access and roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Control who has access to your organization's resources and what level of permissions they have.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              <CardTitle>Access Controls</CardTitle>
            </div>
            <CardDescription>
              Configure authentication and authorization settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Set up authentication methods, manage API keys, and configure security policies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}